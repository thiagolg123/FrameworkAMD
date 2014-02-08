package br.com.estudo.tags;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import javax.servlet.jsp.JspException;
import javax.servlet.jsp.JspWriter;
import javax.servlet.jsp.tagext.BodyTagSupport;

public class BreadCrumbTagHandler extends BodyTagSupport {

	private static final long serialVersionUID = 1L;
	private JspWriter out;
	private List<BreadCrumbTagHandler.ItemBreadCrumb> crumbs;
	
	@Override
	public int doStartTag() throws JspException {
		out = pageContext.getOut();
		crumbs = new ArrayList<BreadCrumbTagHandler.ItemBreadCrumb>();
		return EVAL_BODY_BUFFERED;
	}
	
	
	@Override
	public int doEndTag() throws JspException {
		try {
			out.print("<ul class='breadcrumb'>");
			int i = 1;
			for(BreadCrumbTagHandler.ItemBreadCrumb item: crumbs){
				
				if(i < crumbs.size()){
					out.print("<li>");
					
					String url= ""; 
					if(item.getUrl() != null && !item.getUrl().isEmpty()){
						url = item.getUrl();
					}
					out.print("<a href=#"+url+">");
					out.print(" "+item.getName()+" ");
					out.print("</a>");
					
					out.print("<span class='divider'>/</span>");
					out.print("</li>");	
				}
				else{
					out.print("<li  class='active'>");
					out.print(" "+item.getName());
					out.print("</li>");	
				}
				
				
				i += 1;
			}
			out.print("</ul>");	
		}catch(Exception e){
			e.printStackTrace();
		}

		return EVAL_PAGE;
	}
	
	public void addItem(ItemBreadCrumb item){
		this.crumbs.add(item);
	}
	
	public static class ItemBreadCrumb{
		private String name;
		private String url;
		
		public String getName() {
			return name;
		}
		public void setName(String name) {
			this.name = name;
		}
		public String getUrl() {
			return url;
		}
		public void setUrl(String url) {
			this.url = url;
		}
	}
} 