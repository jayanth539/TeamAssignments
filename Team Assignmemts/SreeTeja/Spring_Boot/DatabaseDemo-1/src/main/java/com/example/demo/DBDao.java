package com.example.demo;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.model.Book;

public interface DBDao extends JpaRepository<Book,Integer> {
  public Optional <Book> findById(Integer id);
  public Book save(Book book);
  public List<Book> findAll();
  public boolean existsById(Integer id);
  void deleteById(Integer Id);
}
