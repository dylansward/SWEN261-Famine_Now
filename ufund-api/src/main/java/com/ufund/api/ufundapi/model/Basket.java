package com.ufund.api.ufundapi.model;

import java.util.logging.Logger;

import com.fasterxml.jackson.annotation.JsonProperty;
/**
 * Represents a user's Basket of Needs
 * 
 * @author Dylan Sward
 */
public class Basket {
    private static final Logger LOG = Logger.getLogger(Basket.class.getName());

    // Package private for tests
    static final String STRING_FORMAT = "Basket [id=%d, user=%s, contents=%s]";

    @JsonProperty("id") private int id;
    @JsonProperty("user") private String user;
    @JsonProperty("contents") private Need[] contents;

    /**
     * Create a basket with the given id, username, and basket contents
     * @param id The id of the user
     * @param user The name of the user
     * @param contents The contents of the basket
     * 
     * {@literal @}JsonProperty is used in serialization and deserialization
     * of the JSON object to the Java object in mapping the fields.  If a field
     * is not provided in the JSON object, the Java field gets the default Java
     * value, i.e. 0 for int
     */
    public Basket(@JsonProperty("id") int id, @JsonProperty("user") String user, @JsonProperty("contents") Need[] contents) {
        this.id = id;
        this.user = user;
        this.contents = contents;
    }

    /**
     * Retrieves the id of the basket
     * @return The id of the basket
     */
    public int getId() {return id;}

    /**
     * Retrieves the name of the basket's user
     * @return The name of the basket's user
     */
    public String getUser() {return user;}

    /**
     * Sets the name of the basket's user - necessary for JSON object to Java object deserialization
     * @param user The name of the basket's user
     */
    public void setUser(String user) {this.user = user;}

    /**
     * Retrieves the basket
     * @return The basket
     */
    public Need[] getContents() {return contents;}

    /**
     * Sets the contents of the basket - necessary for JSON object to Java object deserialization
     * @param contents The contents of the basket
     */
    public void setContents(Need[] contents) {this.contents = contents;}

    /**
     * {@inheritDoc}
     */
    @Override
    public String toString() {
        String contentsString = "[";
        if(contents != null) {
            for(int i = 0; i<contents.length-1; i++) {
                contentsString += contents[i].toString() + ", ";
            }
            contentsString += contents[contents.length-1];
        }
        contentsString += "]";

        return String.format(STRING_FORMAT,id,user,contentsString);
    }
}