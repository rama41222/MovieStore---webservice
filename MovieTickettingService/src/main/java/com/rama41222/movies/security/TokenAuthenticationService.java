//package com.rama41222.movies.security;
//
//import io.jsonwebtoken.Jwts;
//import io.jsonwebtoken.SignatureAlgorithm;
//import org.springframework.security
//            .authentication.UsernamePasswordAuthenticationToken;
//import org.springframework.security.core.Authentication;
//
//import javax.servlet.http.HttpServletRequest;
//import javax.servlet.http.HttpServletResponse;
//import java.util.Date;
//
//import static java.util.Collections.emptyList;
//
//class TokenAuthenticationService {
//	
//    static final long EXPIRATIONTIME = 603400; // 10 days
//    static final String SECRET = "mghfjkdghgjfi_lkjd.iolgut4#$3er.tyR_Tyi7432642";
//    static final String TOKEN_PREFIX = "JWT";
//    static final String HEADER_STRING = "Authorization";
//
//    static void addAuthentication(HttpServletResponse res, String username) {
//        String JWT = Jwts.builder()
//                .setSubject(username)
//                .setExpiration(new Date(System.currentTimeMillis() + EXPIRATIONTIME))
//                .signWith(SignatureAlgorithm.HS256, SECRET)
//                .compact();
//        res.addHeader(HEADER_STRING, TOKEN_PREFIX + " " + JWT);
//    }
//
//    static Authentication getAuthentication(HttpServletRequest request) {
//        String token = request.getHeader(HEADER_STRING);
//        if (token != null) {
//            // parse the token.
//            String user = Jwts.parser()
//                    .setSigningKey(SECRET)
//                    .parseClaimsJws(token.replace(TOKEN_PREFIX, ""))
//                    .getBody()
//                    .getSubject();
//
//            return user != null ?
//                    new UsernamePasswordAuthenticationToken(user, null, emptyList()) :
//                    null;
//        }
//        return null;
//    }
//}