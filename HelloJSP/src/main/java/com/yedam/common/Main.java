package com.yedam.common;

import java.util.List;

import org.apache.ibatis.session.SqlSession;

import com.yedam.mapper.ReplyMapper;
import com.yedam.vo.ReplyVO;

public class Main {
   public static void Main(String[] args) {
	   SqlSession sqlSession = DBUtil.getInstance().openSession();
	   ReplyMapper mapper = sqlSession.getMapper(ReplyMapper.class);
  }
}
