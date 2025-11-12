package com.ufund.api.ufundapi.persistence;

import java.util.Map;
import java.util.TreeMap;
import java.util.logging.Logger;
import java.io.IOException;
import java.io.File;
import java.util.ArrayList;

import com.fasterxml.jackson.databind.ObjectMapper;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import com.ufund.api.ufundapi.model.Basket;
import com.ufund.api.ufundapi.model.Need;

@Component
public class BasketsFileDAO implements BasketsDAO {
    private static final Logger LOG = Logger.getLogger(BasketsFileDAO.class.getName());

    Map<Integer, Basket> baskets;
    private ObjectMapper objectMapper;
    private static int nextId;
    private String filename;

    public BasketsFileDAO(@Value("${baskets.file}") String filename, ObjectMapper objectMapper) throws IOException {
        this.filename = filename;
        this.objectMapper = objectMapper;
        load();
    }

    private synchronized static int nextId() {
        int id = nextId;
        ++nextId;
        return id;
    }

    private Basket[] getBasketsArray() {
        return getBasketsArray(null);
    }

    private Basket[] getBasketsArray(String containsText) {
        ArrayList<Basket> basketArrayList = new ArrayList<>();
        for (Basket basket : baskets.values()) {
            if (containsText == null || basket.getUser().toLowerCase().contains(containsText)) {
                basketArrayList.add(basket);
            }
        }

        Basket[] basketArray = new Basket[basketArrayList.size()];
        basketArrayList.toArray(basketArray);
        return basketArray;
    }

    private boolean save() throws IOException {
        Basket[] basketArray = getBasketsArray();
        objectMapper.writeValue(new File(filename), basketArray);
        return true;
    }

    private boolean load() throws IOException {
        baskets = new TreeMap<>();
        nextId = 0;

        Basket[] basketArray = objectMapper.readValue(new File(filename), Basket[].class);
        for (Basket basket : basketArray) {
            baskets.put(basket.getId(), basket);
            if (basket.getId() >= nextId) {
                nextId = basket.getId();
            }
        }

        ++nextId;
        return true;
    }

    @Override
    public Basket createBasket(Basket basket) throws IOException {
        synchronized(baskets) {
            Basket newBasket = new Basket(nextId(), basket.getUser(), basket.getSpent(), basket.getContents(), basket.getStyles(), basket.getSel_background(), basket.getSel_header(), basket.getSel_subheader(), basket.getSel_text(), basket.getSel_input(), basket.getSel_button());
            baskets.put(newBasket.getId(), newBasket);
            save();
            return newBasket;
        }
    }

    @Override
    public Basket deleteBasket(int id) throws IOException {
        synchronized(baskets) {
            if(baskets.containsKey(id)) {
                Basket temp = baskets.get(id);
                baskets.remove(id);
                return temp;
            } else return null;
        }
    }

    @Override
    public Basket getBasket(int id) throws IOException {
        synchronized(baskets) {
            if(baskets.containsKey(id)) return baskets.get(id);
            else return null;
        }
    }

    @Override
    public Basket updateBasket(Basket basket) throws IOException {
        synchronized(baskets) {
            if(baskets.containsKey(basket.getId()) == false) return null;

            baskets.put(basket.getId(), basket);
            save();
            return basket;
        }
    }

    @Override
    public Basket[] getBaskets() {
        synchronized(baskets) {
            return getBasketsArray();
        }
    }

    @Override
    public Basket[] searchBaskets(String containsText) throws IOException {
        synchronized(baskets) {
            return getBasketsArray(containsText.toLowerCase());
        }
    }
}
