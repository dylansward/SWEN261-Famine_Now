package com.ufund.api.ufundapi.persistence;

import static org.junit.jupiter.api.Assertions.assertArrayEquals;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNull;
import static org.junit.jupiter.api.Assertions.fail;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

import com.fasterxml.jackson.databind.ObjectMapper;

import com.ufund.api.ufundapi.model.Need;

import java.io.File;
import java.io.IOException;

/*public class CupboardFileDAOTest {
    CupboardFileDAO cfdao;
    Need[] testNeeds;
    ObjectMapper mockObjectMapper;

    @BeforeEach
    public void setupCupboardFileDAO() throws IOException {
        mockObjectMapper = mock(ObjectMapper.class);
        
        testNeeds = new Need[3];
        testNeeds[0] = new Need(0, "Taco", 5.99, 10);
        testNeeds[1] = new Need(1, "Burrito", 8.99, 5);
        testNeeds[2] = new Need(2, "Quesadilla", 6.99, 8);
        when(mockObjectMapper.readValue(new File("ex.file"), Need[].class)).thenReturn(testNeeds);
        cfdao = new CupboardFileDAO("ex.file", mockObjectMapper);
    }

    @Test
    public void testCreateNeed() {
        int count = 0;
        try {
            for(; count < testNeeds.length; count++) {
                Need testNeed = cfdao.createNeed(testNeeds[count]);
                assertEquals(testNeeds[count].getName(), testNeed.getName(), "Failed on testNeed[" + count + "]");
                assertEquals(testNeeds[count].getCost(), testNeed.getCost(), "Failed on testNeed[" + count + "]");
                assertEquals(testNeeds[count].getQuantity(), testNeed.getQuantity(), "Failed on testNeed[" + count + "]");
            }
        } 
        catch(Exception e) {
            fail("On testNeed[" + count + "]: " + e.getMessage());
        }
    }
    
    @Test
    public void testDeleteNeed() {
        try {
            int count = 0;
            for(; count < testNeeds.length; count++) {
                cfdao.deleteNeed(count);
                assertNull(cfdao.deleteNeed(count));
            }
        }
        catch(Exception e) {
            fail(e.getMessage());
        }
    }

    @Test
    public void testGetNeed() {
        try {
            int count = 0;
            for(; count < testNeeds.length; count++) {
                assertEquals(testNeeds[count], cfdao.getNeed(count));
            }
        }
        catch(Exception e) {
            fail(e.getMessage());
        }
    }

    @Test
    public void testUpdateNeeds() {
        try {
            Need newNeed = new Need(0, "Pizza", 12.99, 1);
            Need actualNeed = cfdao.updateNeed(newNeed);
            assertEquals(newNeed, actualNeed);
            newNeed = new Need(4, "Pizza", 12.99, 1);
            actualNeed = cfdao.updateNeed(newNeed);
            assertNull(cfdao.getNeed(4));
        }
        catch(Exception e) {
            fail(e.getMessage());
        }
    }

    @Test
    public void testGetNeeds() {
        try {
            assertArrayEquals(testNeeds, cfdao.getNeeds());
        }
        catch(Exception e) {
            fail(e.getMessage());
        }
    }

    @Test
    public void testSearchNeeds() {
        try {
            Need[] testSearchNeeds = {testNeeds[0]};
            Need[] actualNeeds = cfdao.searchNeeds("Taco");
            assertArrayEquals(testSearchNeeds, actualNeeds);
        }
        catch(Exception e) {
            fail(e.getMessage());
        }
    }
}
*/