package com.springsource.roo.pizzashop.web;

import org.springframework.roo.addon.web.mvc.controller.RooWebScaffold;
import com.springsource.roo.pizzashop.domain.PizzaOrder;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.stereotype.Controller;

@RooWebScaffold(path = "pizzaorder", 
        formBackingObject = PizzaOrder.class, 
        delete=false, 
        update=false)
@RequestMapping("/pizzaorders")
@Controller
public class PizzaOrderController {
}
