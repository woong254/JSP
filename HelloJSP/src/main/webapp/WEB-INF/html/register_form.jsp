<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>


<form action='addBoard.do' method='post' enctype="multipart/form-data">
	<input type="hidden" required name="writer" value="${logId }" class="form-control">
	<table class="table" >
		<tr>
			<th>제목</th>
			<td><input type="text" required name="title" class="form-control"></td>
		</tr>
		<tr>
			<th>작성자</th>
			<td>${logId }</td>
		</tr>
		<tr>
			<th>내용</th>
			<td><textarea required name="content" class="form-control"></textarea></td>
		</tr>
		<tr>
			<th>이미지</th>
			<td><input type="file" name="image" class='form-control'></td>
		</tr>
		<tr>
			<td colspan='2' align='center'><input type="submit" class="btn btn-primary"></td>
		</tr>
	</table>
</form>

