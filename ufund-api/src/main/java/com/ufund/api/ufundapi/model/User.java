package com.ufund.api.ufundapi.model;

public class User {
    private static int ID = 0;
    private int thisID;
    private String username;
    private String password;

    public User(String username, String password) {
        this.thisID = ID;
        this.username = username;
        this.password = password;
        ID++;
    }

    public void setUsername(String username) {
        this.username = username;
    }
    public void setPassword(String password) {
        this.password = password;
    }

    public int getID() {
        return this.thisID;
    }
    public String getUsername() {
        return this.username;
    }
    public String getPassword() {
        return this.password;
    }

    public boolean isAdmin() {
        if(this instanceof Admin) {
            return true;
        }
        else {
            return false;
        }
    }
}
