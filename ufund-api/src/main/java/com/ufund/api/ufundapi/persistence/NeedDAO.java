package com.ufund.api.ufundapi.persistence;

import java.io.IOException;

import com.ufund.api.ufundapi.model.Need;

public interface NeedDAO {
    Need createNeed(Need need) throws IOException;
    Need deleteNeed(int id) throws IOException;
    Need getNeed(int id) throws IOException;
    Need updateNeed(Need need) throws IOException;
    Need[] getNeeds() throws IOException;
    Need[] searchNeeds(String containsText) throws IOException;
}
