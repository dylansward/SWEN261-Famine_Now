package com.ufund.api.ufundapi.persistence;

import java.io.IOException;

import com.ufund.api.ufundapi.model.Basket;

public interface BasketsDAO {
    Basket createBasket(Basket basket) throws IOException;
    Basket deleteBasket(int id) throws IOException;
    Basket getBasket(int id) throws IOException;
    Basket updateBasket(Basket basket) throws IOException;
    Basket[] getBaskets() throws IOException;
    Basket[] searchBaskets(String containsText) throws IOException;
}
