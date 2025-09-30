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

import com.ufund.api.ufundapi.model.Need;

@Component
public class NeedFileDAO implements NeedDAO {
    private static final Logger LOG = Logger.getLogger(NeedFileDAO.class.getName());
    Map<Integer, Need> needs;
    private ObjectMapper objectMapper;
    private static int nextId;
    private String filename;

    public NeedFileDAO(@Value("${needs.file}") String filename, ObjectMapper objectMapper) throws IOException {
        this.filename = filename;
        this.objectMapper = objectMapper;
        load();
    }

    private synchronized static int nextId() {
        int id = nextId;
        ++nextId;
        return id;
    }

    private Need[] getNeedsArray() {
        return getNeedsArray(null);
    }

    private Need[] getNeedsArray(String containsText) {
        ArrayList<Need> needArrayList = new ArrayList<>();
        for (Need need : needs.values()) {
            if (containsText == null || need.getName().toLowerCase().contains(containsText)) {
                needArrayList.add(need);
            }
        }

        Need[] needArray = new Need[needArrayList.size()];
        needArrayList.toArray(needArray);
        return needArray;
    }

    private boolean save() throws IOException {
        Need[] needArray = getNeedsArray();
        objectMapper.writeValue(new File(filename), needArray);
        return true;
    }

    private boolean load() throws IOException {
        needs = new TreeMap<>();
        nextId = 0;

        Need[] needArray = objectMapper.readValue(new File(filename), Need[].class);
        for (Need need : needArray) {
            needs.put(need.getId(), need);
            if (need.getId() >= nextId) {
                nextId = need.getId();
            }
        }

        ++nextId;
        return true;
    }

    @Override
    public Need createNeed(Need need) throws IOException {
        synchronized(needs) {
            Need newNeed = new Need(nextId(), need.getName(), need.getCost(), need.getQuantity());
            needs.put(newNeed.getId(), newNeed);
            save();
            return newNeed;
        }
    }

    @Override
    public Need getNeed(int id) throws IOException {
        synchronized(needs) {
            if(needs.containsKey(id)) {
                return needs.get(id);
            }
            else {
                return null;
            }
        }
    }

    @Override
    public Need updateNeed(Need need) throws IOException {
        synchronized(needs) {
            if (needs.containsKey(need.getId()) == false)
                return null;

            needs.put(need.getId(),need);
            save();
            return need;

    public Need[] getNeeds() {
        synchronized(needs) {
            return getNeedsArray();
        }
    }

    @Override
    public Need[] searchNeeds(String containsText) throws IOException {
        synchronized(needs) {
            return getNeedsArray(containsText.toLowerCase());
        }
    }
}

