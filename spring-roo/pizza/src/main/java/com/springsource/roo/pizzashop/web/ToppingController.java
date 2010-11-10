package com.springsource.roo.pizzashop.web;

import org.springframework.roo.addon.web.mvc.controller.RooWebScaffold;
import com.springsource.roo.pizzashop.domain.Topping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.stereotype.Controller;

@RooWebScaffold(path = "toppings", formBackingObject = Topping.class)
@RequestMapping("/toppings")
@Controller
public class ToppingController {
}
