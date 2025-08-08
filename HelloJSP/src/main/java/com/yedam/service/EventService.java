package com.yedam.service;

import java.util.List;

import com.yedam.vo.EventVO;

public interface EventService {
	List<EventVO> eventList();
	boolean addEvent(EventVO event);
}
