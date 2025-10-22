package com.ufund.api.ufundapi;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import com.ufund.api.ufundapi.model.Need;

@SpringBootTest
class UfundApiApplicationTests {

	@Test
	void contextLoads() {
	}

	@Test
	void test_NeedConstructor(){
		int id =1;
		String name = "Balls";
		float cost = 6.67f;
		int quantity = 10;

		Need n = new Need(id, name, cost, quantity);

		assertEquals(name, n.getName());
		assertEquals(id, n.getId());
		assertEquals(cost, n.getCost());
		assertEquals(quantity, n.getQuantity());
	}
}
