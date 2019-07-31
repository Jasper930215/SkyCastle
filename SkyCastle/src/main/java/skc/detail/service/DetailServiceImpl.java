package skc.detail.service;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import skc.common.common.CommandMap;
import skc.detail.dao.DetailDAO;

@Service("DetailService")
public class DetailServiceImpl implements DetailService
{
	@Resource(name="detailDAO")
	private DetailDAO detailDAO;
	
	@Override
	public List<Map<String, Object>> getDetailList(CommandMap commandMap) throws Exception
	{
		return detailDAO.getDetailList(commandMap);
	}
	@Override
	public List<Map<String, Object>> getDetailInfo(Map<String, Object> map) throws Exception
	{
		return detailDAO.getDetailInfo(map);
	}
	@Override
	public void insertDetail(Map<String, Object> map) throws Exception
	{
		detailDAO.insertDetail(map);
	}
	@Override
	public void updateDetail(Map<String, Object> map) throws Exception
	{
		detailDAO.updateDetail(map);
	}
	@Override
	public void deleteDetail(Map<String, Object> map) throws Exception
	{
		detailDAO.deleteDetail(map);
	}
}