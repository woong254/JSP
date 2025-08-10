package com.yedam.service;

import java.util.List;
import java.util.Map;

import com.yedam.vo.EventVO;

public interface EventService {
	List<EventVO> eventList();
	boolean addEvent(Map<String, String> map);
	boolean removeEvent(String title);
}
