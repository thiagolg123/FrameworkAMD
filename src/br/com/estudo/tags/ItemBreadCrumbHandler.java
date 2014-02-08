package br.com.estudo.tags;

import javax.servlet.jsp.JspException;
import javax.servlet.jsp.JspWriter;
import javax.servlet.jsp.tagext.BodyTagSupport;

public class ItemBreadCrumbHandler extends BodyTagSupport {

	private static final long serialVersionUID = 1L;
	private JspWriter out;
	private String name;
	private String url;
	@Override
	public int doStartTag() throws JspException {
		out = pageContext.getOut();
		return EVAL_BODY_BUFFERED;
	}
	
	@Override
	public int doEndTag() throws JspException {
		try {
			BreadCrumbTagHandler breadCrumbTagHandler = (BreadCrumbTagHandler) findAncestorWithClass(this, BreadCrumbTagHandler.class);
			
			BreadCrumbTagHandler.ItemBreadCrumb breadCrumb = new BreadCrumbTagHandler.ItemBreadCrumb ();
			breadCrumb.setName(getName());
			breadCrumb.setUrl(getUrl());
			
			breadCrumbTagHandler.addItem(breadCrumb);
		}catch(Exception e){
			e.printStackTrace();
		}

		return EVAL_PAGE;
	}

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