package com.yedam.mapper;

import java.util.List;
import java.util.Map;

import com.yedam.vo.EventVO;

public interface EventMapper {
	List<EventVO> eventList();
	int insertEvent(Map<String, String> map);
	int deleteEvent(String title);
}
