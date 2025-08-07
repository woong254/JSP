package com.yedam.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.yedam.vo.ReplyVO;

public interface ReplyMapper {
	List<ReplyVO> replyList(@Param("boardNo"/*<-- 쿼리안에서 쓰는 변수*/) int bpardNo,@Param("page") int page); // 목록
	int deleteList(int replyNo); // 삭제
	int insertReply(ReplyVO reply); // 등록
	int selectCount(int boardNo); // 댓글건수계산.
}
