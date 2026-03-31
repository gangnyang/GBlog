package com.gblog.backend.post.service;

import com.gblog.backend.post.domain.Post;
import com.gblog.backend.post.dto.PostDetailResponse;
import com.gblog.backend.post.dto.PostListResponse;
import com.gblog.backend.post.repository.PostRepository;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.stream.Collectors;

@Service
@Transactional(readOnly = true)
public class PostService {

    private final PostRepository postRepository;

    public PostService(PostRepository postRepository) {
        this.postRepository = postRepository;
    }

    public List<PostListResponse> getPosts() {
        return postRepository.findAllByOrderByCreatedAtDesc()
                .stream()
                .map(this::toListResponse)
                .collect(Collectors.toList());
    }

    public PostDetailResponse getPost(String slug) {
        Post post = postRepository.findBySlug(slug)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Post not found"));

        return new PostDetailResponse(
                post.getId(),
                post.getSlug(),
                post.getTitle(),
                post.getSummary(),
                post.getContent(),
                post.getAuthorName(),
                post.getCreatedAt(),
                post.getUpdatedAt()
        );
    }

    private PostListResponse toListResponse(Post post) {
        return new PostListResponse(
                post.getId(),
                post.getSlug(),
                post.getTitle(),
                post.getSummary(),
                post.getAuthorName(),
                post.getCreatedAt()
        );
    }
}

