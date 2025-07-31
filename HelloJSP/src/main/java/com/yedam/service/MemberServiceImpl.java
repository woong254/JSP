package com.yedam.service;

import org.apache.ibatis.session.SqlSession;

import com.yedam.common.DBUtil;
import com.yedam.mapper.MemberMapper;
import com.yedam.vo.MemberVO;

public class MemberServiceImpl implements MemberService {

	SqlSession sqlSession = DBUtil.getInstance().openSession();
	MemberMapper mapper = sqlSession.getMapper(MemberMapper.class);

	@Override
	public boolean addMember(MemberVO mamber) {
		int r = mapper.insertMember(mamber);
		if (r > 0) {
			sqlSession.commit();
			return true; // 정상처리
		}
		return false;
	}
	
	@Override
	public MemberVO userCheck(String id, String pw) {
		return mapper.selectMember(id,pw);
	}

}
