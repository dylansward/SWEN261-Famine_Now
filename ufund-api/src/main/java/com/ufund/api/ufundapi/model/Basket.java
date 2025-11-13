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
    static final String STRING_FORMAT = "Basket [id=%d, user=%s, spent=%.2f, contents=%s, styles=%s, sel_background=%s, sel_header=%s, sel_subheader=%s, sel_text=%s, sel_input=%s, sel_button=%s]";

    @JsonProperty("id") private int id;
    @JsonProperty("user") private String user;
    @JsonProperty("spent") private double spent;

    @JsonProperty("contents") private Need[] contents;

    @JsonProperty("styles") private String[] styles;
    @JsonProperty("sel_background") private String sel_background;
    @JsonProperty("sel_header") private String sel_header; 
    @JsonProperty("sel_subheader") private String sel_subheader;
    @JsonProperty("sel_text") private String sel_text;
    @JsonProperty("sel_input") private String sel_input; 
    @JsonProperty("sel_button") private String sel_button; 

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
    public Basket(@JsonProperty("id") int id, @JsonProperty("user") String user, @JsonProperty("spent") double spent, @JsonProperty("contents") Need[] contents, @JsonProperty("styles") String[] styles,
        @JsonProperty("sel_background") String sel_background, @JsonProperty("sel_header") String sel_header, @JsonProperty("sel_subheader") String sel_subheader,
        @JsonProperty("sel_text") String sel_text, @JsonProperty("sel_input") String sel_input, @JsonProperty("sel_button") String sel_button) {
        this.id = id;
        this.user = user;
        this.spent = spent;
        this.contents = contents;
        this.styles = styles;
        this.sel_background = sel_background;
        this.sel_header = sel_header;
        this.sel_subheader = sel_subheader;
        this.sel_text = sel_text;
        this.sel_input = sel_input;
        this.sel_button = sel_button;
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

    
    public double getSpent() {return spent;}

    public void setSpent(double spent) {this.spent = spent;}


    public String[] getStyles() {return styles;}

    public void setStyles(String[] styles) {this.styles = styles;}


    public String getSel_background() {return sel_background;}

    public void setSel_background(String sel_background) {this.sel_background = sel_background;}


    public String getSel_header() {return sel_header;}

    public void setSel_header(String sel_header) {this.sel_header = sel_header;}


    public String getSel_subheader() {return sel_subheader;}

    public void setSel_subheader(String sel_subheader) {this.sel_subheader = sel_subheader;}


    public String getSel_text() {return sel_text;}

    public void setSel_text(String sel_text) {this.sel_text = sel_text;}


    public String getSel_input() {return sel_input;}

    public void setSel_input(String sel_input) {this.sel_input = sel_input;}


    public String getSel_button() {return sel_button;}

    public void setSel_button(String sel_button) {this.sel_button = sel_button;}


    /**
     * {@inheritDoc}
     */
    @Override
    public String toString() {
        String contentsString = "[";
        if(contents.length > 0) {
            for(int i = 0; i<contents.length-1; i++) {
                contentsString += contents[i].toString() + ", ";
            }
            contentsString += contents[contents.length-1];
        }
        contentsString += "]";

        String stylesString = "[";
        if(styles.length > 0) {
            for(int i = 0; i<styles.length-1; i++) {
                stylesString += styles[i] + ", ";
            }
            stylesString += styles[styles.length-1];
        }
        stylesString += "]";

        return String.format(STRING_FORMAT,id,user,spent, contentsString, stylesString, sel_background, sel_header, sel_subheader, sel_text, sel_input, sel_button);
    }
}