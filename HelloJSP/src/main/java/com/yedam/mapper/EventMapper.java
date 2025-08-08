package com.yedam.mapper;

import java.util.List;

import com.yedam.vo.EventVO;

public interface EventMapper {
	List<EventVO> eventList();
	int insertEvent(EventVO event);
}
