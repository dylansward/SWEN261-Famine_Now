package com.ufund.api.ufundapi.persistence;

import java.io.IOException;

import com.ufund.api.ufundapi.model.Need;

public interface NeedDAO {
    Need createNeed(Need need) throws IOException;

    boolean deleteNeed(int id) throws IOException;
    Need[] getNeeds() throws IOException;
}
