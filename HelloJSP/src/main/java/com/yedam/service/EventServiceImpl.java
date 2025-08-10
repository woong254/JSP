package com.yedam.service;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.session.SqlSession;

import com.yedam.common.DBUtil;
import com.yedam.mapper.EventMapper;
import com.yedam.vo.EventVO;

public class EventServiceImpl implements EventService {
	SqlSession sqlSession = DBUtil.getInstance().openSession();
	EventMapper mapper = sqlSession.getMapper(EventMapper.class);
	   
	@Override
	public List<EventVO> eventList(){
		return mapper.eventList();
	   }
	
	@Override
	public boolean addEvent(Map<String, String> map) {
		int r = mapper.insertEvent(map);
		if (r > 0) {
			sqlSession.commit();
			return true;
		}
		return false;
	}
	
	@Override
	public boolean removeEvent(String title) {
		int r = mapper.deleteEvent(title);
		if (r > 0) {
			sqlSession.commit();
			return true;
		}
		return false;
	}
	
}
