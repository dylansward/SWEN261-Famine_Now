package com.ufund.api.ufundapi.controller;

import java.util.logging.Logger;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ufund.api.ufundapi.persistence.NeedDAO;

@RestController
@RequestMapping("needs")
public class NeedController {
    private static final Logger LOG = Logger.getLogger(NeedController.class.getName());
    private NeedDAO needDAO;

    public NeedController(NeedDAO needDAO) {
        this.needDAO = needDAO;
    }
}
