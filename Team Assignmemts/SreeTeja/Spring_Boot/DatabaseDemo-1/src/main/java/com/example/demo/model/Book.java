package com.example.demo.model;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Book {
	String title;
	String author;
	double price;
    @Id
	int id;
	@Override
	public String toString() {
		return "Book [title=" + title + ", author=" + author + ", price=" + price + ", id=" + id + "]";
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getAuthor() {
		return author;
	}

	public void setAuthor(String author) {
		this.author = author;
	}

	public double getPrice() {
		return price;
	}

	public Book() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Book(String title, String author, double price, int id) {
		super();
		this.title = title;
		this.author = author;
		this.price = price;
		this.id = id;
	}

	public void setPrice(double price) {
		this.price = price;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

}
