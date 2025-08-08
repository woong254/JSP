package com.yedam.service;

import java.util.List;

import org.apache.ibatis.session.SqlSession;

import com.yedam.common.DBUtil;
import com.yedam.mapper.EventMapper;
import com.yedam.vo.EventVO;
import com.yedam.vo.ReplyVO;

public class EventServiceImpl implements EventService {
	SqlSession sqlSession = DBUtil.getInstance().openSession();
	EventMapper mapper = sqlSession.getMapper(EventMapper.class);
	   
	@Override
	public List<EventVO> eventList(){
		return mapper.eventList();
	   }
	
	@Override
	public boolean addEvent(EventVO event) {
		int r = mapper.insertEvent(event);
		if (r > 0) {
			sqlSession.commit();
			return true;
		}
		return false;
	}
	
}
