package com.ufund.api.ufundapi.persistence;

import static org.junit.jupiter.api.Assertions.assertArrayEquals;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNull;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.fail;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Tag;
import org.junit.jupiter.api.Test;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.doThrow;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

import com.fasterxml.jackson.databind.ObjectMapper;

import com.ufund.api.ufundapi.model.Basket;
import com.ufund.api.ufundapi.model.Need;

import java.io.File;
import java.io.IOException;

@Tag("Persistence-tier")
public class BasketsFileDAOTest {
    BasketsFileDAO bfdao;
    Basket[] testBaskets;
    ObjectMapper mockObjectMapper;

    @BeforeEach
    public void setupBasketsFileDAO() throws IOException {
        mockObjectMapper = mock(ObjectMapper.class);

        testBaskets = new Basket[3];
        testBaskets[0] = new Basket(0, "Albin", 100, new Need[] {new Need(0, "Taco", 9.99, 3, "Here"), new Need(1, "Chips", 3.99, 1, "Here"), new Need(2, "Salsa", 1.99, 1, "Here"), new Need(3, "Soda", 4.99, 1, "Here")}, new String[] {"default"}, "default", "default", "default", "default", "default", "default");
        testBaskets[1] = new Basket(1, "Albin Jr", 10, null, null, null, null, null, null, null, null);
        testBaskets[2] = new Basket(2, "Albin III", 0, new Need[] {new Need(0, "Taco", 11.99, 5, "Here"), new Need(4, "Water", 1.99, 1, "Here")}, new String[] {"default", "not default"}, "not default", "not default", "not default", "not default", "not default", "not default");

        when(mockObjectMapper.readValue(new File("ex.file"), Basket[].class)).thenReturn(testBaskets);
        bfdao = new BasketsFileDAO("ex.file", mockObjectMapper);
    }

    @Test
    public void testCreateBasket() {
        int count = 0;
        try {
            for(; count < testBaskets.length; count++) {
                Basket testBasket = bfdao.createBasket(testBaskets[count]);
                assertEquals(testBaskets[count].getUser(), testBasket.getUser(), "Failed on testBasket[" + count + "]");
                assertArrayEquals(testBaskets[count].getContents(), testBasket.getContents(), "Failed on testBasket[" + count + "]");
            }
        } catch(Exception e) {
            fail("On testBasket[" + count + "]: " + e.getMessage());
        }
    }

    @Test
    public void testGetBasket() {
        int count = 0;
        try {
            for(; count < testBaskets.length; count++) {
                Basket testBasket = bfdao.getBasket(count);
                assertEquals(testBaskets[count].getUser(), testBasket.getUser(), "Failed on testBasket[" + count + "]");
                assertArrayEquals(testBaskets[count].getContents(), testBasket.getContents(), "Failed on testBasket[" + count + "]");
            }
        } catch(Exception e) {
            fail("On testBasket[" + count + "]: " + e.getMessage());
        }
    }

    @Test
    public void testGetBaskets() {
        try {
            Basket[] actualBaskets = bfdao.getBaskets();
            for(int i = 0; i < actualBaskets.length; i++) {
                assertEquals(testBaskets[i].getUser(), actualBaskets[i].getUser(), "Failed on testBasket[" + i + "]");
                assertArrayEquals(testBaskets[i].getContents(), actualBaskets[i].getContents(), "Failed on testBasket[" + i + "]");
            }
        } catch(Exception e) {
            fail(e.getMessage());
        }
    }

    @Test
    public void testSearchBasket() {
        try {
            Basket[] actualBaskets = bfdao.searchBaskets("Albin");
            assertEquals(testBaskets.length, actualBaskets.length);
            for(int i = 0; i < actualBaskets.length; i++) {
                assertEquals(testBaskets[i].getUser(), actualBaskets[i].getUser(), "Failed on testBasket[" + i + "]");
                assertArrayEquals(testBaskets[i].getContents(), actualBaskets[i].getContents(), "Failed on testBasket[" + i + "]");
            }

            actualBaskets = bfdao.searchBaskets(" ");
            for(int i = 1; i < testBaskets.length; i++) {
                assertEquals(testBaskets[i].getUser(), actualBaskets[i-1].getUser(), "Failed on testBasket[" + i + "]");
                assertArrayEquals(testBaskets[i].getContents(), actualBaskets[i-1].getContents(), "Failed on testBasket[" + i + "]");
            }
        } catch(Exception e) {
            fail(e.getMessage());
        }
    }

    @Test
    public void testUpdateBasket() {
        int count = 0;
        try {
            for(int i = 0; i < testBaskets.length; i++) {
                Basket newBasket = new Basket(testBaskets[i].getId(), testBaskets[i].getUser(), testBaskets[i].getSpent(), null, null, null, null, null, null, null, null);
                Basket actualBasket = bfdao.updateBasket(newBasket);
                assertEquals(newBasket.getUser(), actualBasket.getUser(), "Failed on testBasket[" + i + "]");
                assertNull((Object) actualBasket.getContents(), "Failed on testBasket[" + i + "]");
            }
        } catch(Exception e) {
            fail("On testBasket[" + count + "]: " + e.getMessage());
        }
    }

    @Test
    public void testDeleteBasket() {
        try {
            int i = 0;
            for(; i<testBaskets.length; i++) {
                Basket testBasket = bfdao.deleteBasket(i);
                assertNotNull(testBasket, "Failed on testBasket[" + i + "]");
            }

            assertEquals(testBaskets.length, i);
        } catch(Exception e) {
            fail(e.getMessage());
        }
    }
}