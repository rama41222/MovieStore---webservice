package com.rama41222.movies.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import com.rama41222.movies.entities.Movie;
import com.rama41222.movies.services.MovieService;
@CrossOrigin(origins = "http://localhost:9000")
@RestController
public class Movies {
	
	@Autowired
	private MovieService movieService;
	
	@RequestMapping("/movies")
	public List<Movie> getAllMovies(){
		return movieService.getAllMovies();
	}
	
	@RequestMapping(value="/movies/{id}")
	public Movie getMovieById(@PathVariable("id") String id){
		return movieService.getMovieById(id);
	}
	
	@RequestMapping(method=RequestMethod.POST, value="/movies")
	public String addMovie(@RequestBody Movie movie){
		if(movieService.addMovie(movie)){
			return "Sucess";
		}else{
			return "Failed to add a new Topic";
		}
	}
	
	@RequestMapping(method=RequestMethod.PUT,value="/movies/{id}")
	public String updateMovie(@PathVariable("id") String id, @RequestBody Movie movie){
		if(movieService.updateMovie(id, movie)){
			return "Update Success!";
		}
		return "Update failed";
	}
	
	@RequestMapping(method=RequestMethod.DELETE, value="/movies/{id}")
	public String deleteMovie(@PathVariable("id") String id){
		
		if(movieService.deleteMovie(id)){
			return "Movie Deleted Success";
		}
		return "Delete Failed";
	}
	
}
