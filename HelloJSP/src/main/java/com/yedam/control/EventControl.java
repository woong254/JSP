package com.yedam.control;

import java.io.IOException;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.yedam.common.Control;
import com.yedam.service.EventService;
import com.yedam.service.EventServiceImpl;
import com.yedam.vo.EventVO;

public class EventControl implements Control {

	@Override
	public void execute(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
			EventService svc = new EventServiceImpl();
			List <EventVO> g = svc.eventList();
			
			Gson gson = new GsonBuilder().create();
			String json = gson.toJson(g);
			
			// 출력스트림.
			resp.getWriter().print(json);
	}

}
