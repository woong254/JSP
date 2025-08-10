package com.yedam.control;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.yedam.common.Control;
import com.yedam.service.EventService;
import com.yedam.service.EventServiceImpl;

public class RemoveEventControl implements Control {

	@Override
	public void execute(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		// TODO Auto-generated method stub
		String title = req.getParameter("title");
		EventService svc = new EventServiceImpl();
		if(svc.removeEvent(title)) {
			resp.getWriter().print("{\"retCode\":\"OK\"}");
		} else {
			resp.getWriter().print("{\"retCode\":\"NG\"}");
		}
		

	}

}
