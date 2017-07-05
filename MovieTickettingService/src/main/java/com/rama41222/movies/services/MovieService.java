package com.rama41222.movies.services;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.springframework.stereotype.Service;
import com.rama41222.movies.entities.Movie;
import com.rama41222.movies.entities.Theatre;

@Service
public class MovieService {

	private List<Theatre> theatersForJohnWick = new ArrayList<>(Arrays.asList(
			new Theatre("Savoy 3D", "Wellawatte", 300),
			new Theatre("Sigiri", "Katugastota",500)
			));
	
	private List<Theatre> theatersForSkullIsland = new ArrayList<>(Arrays.asList(
			new Theatre("Libery", "Colpity",400)
			));
	
	private List<Theatre> theatersForShooter = new ArrayList<>(Arrays.asList(
			new Theatre("Regal", "Gampaha",600),
			new Theatre("Amity", "Maharagama",150),
			new Theatre("Libery", "Colpity", 400)
			));
	
	private List<Theatre> theatersDayAfterTomorrw = new ArrayList<>(Arrays.asList(
			new Theatre("Regal", "Gampaha", 600),
			new Theatre("Amity", "Maharagama", 150)
			));
	
	private List<Theatre> theaters2012 = new ArrayList<>(Arrays.asList(
			new Theatre("Savoy 3D", "Wellawatte", 300),
			new Theatre("Sigiri", "Katugastota", 500)
			));
	
	private List<Theatre> theatersForSuicideSquad = new ArrayList<>(Arrays.asList(
			new Theatre("Majestic", "Bambalapitiya",400),
			new Theatre("Empire", "Torrignton",450)
			));
	
	private List<String> showTimesOne = new ArrayList<>(Arrays.asList(
			"6PM"
			));
	private List<String> showTimesTwo = new ArrayList<>(Arrays.asList(
			"1PM","6PM"
		));
	private List<String> showTimesThree = new ArrayList<>(Arrays.asList(
			"9AM","1PM","6PM"
		));
	
	private List<Movie> movies = new ArrayList<>(Arrays.asList(
			new Movie("m1","John Wick",650, theatersForJohnWick, showTimesThree),
			new Movie("m2","Skull Island", 450, theatersForSkullIsland, showTimesTwo),
			new Movie("m3","Day After Tomorrow",700, theatersDayAfterTomorrw, showTimesThree),
			new Movie("m4","Shooter", 670, theatersForShooter, showTimesTwo),
			new Movie("m5","2012",570, theaters2012, showTimesTwo),
			new Movie("m6","Suicide Squad",800, theatersForSuicideSquad, showTimesOne)
			));
	
	public List<Movie> getAllMovies(){
		return movies;
	}
	
	public Movie getMovieById(String id){
		return movies.stream().filter(t->t.getId().equals(id)).findFirst().get();
	}
	
	public boolean addMovie(Movie m){
		return movies.add(m);
	} 
	
    public boolean updateMovie(String id,Movie m){
    	Movie m1 = getMovieById(id);
    	int index = movies.indexOf(m1);
    	if(m1 != null && index >= 0){
    		movies.set(index, m);
    		return true;
    	}
		return false;
	} 
    
    public boolean deleteMovie(String id){
    	if(movies.removeIf(m->m.getId().equals(id))){
    		return true;
    	}
    	return false;
    }
	
	public boolean removeMovie(String id){
		return movies.remove(movies.stream().filter(m->m.getId().equals(id)).findFirst().get());
	} 

	
	
}
