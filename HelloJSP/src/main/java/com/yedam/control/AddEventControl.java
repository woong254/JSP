package com.yedam.control;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.yedam.common.Control;
import com.yedam.vo.BoardVO;
import com.yedam.vo.EventVO;

public class AddEventControl implements Control {

	@Override
	public void execute(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		resp.setContentType("text/json;charset=utf-8");
		
		String title = req.getParameter("title");
		String sDate = req.getParameter("startDate");
		String eDate = req.getParameter("endDate");
		
		EventVO param = new EventVO();
		
		param.setTitle(title);
		param.setStartDate(sDate);
		param.setEndDate(eDate);
		
		
	}

}
