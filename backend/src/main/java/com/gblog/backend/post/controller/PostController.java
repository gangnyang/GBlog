package com.gblog.backend.post.controller;

import com.gblog.backend.post.dto.PostDetailResponse;
import com.gblog.backend.post.dto.PostListResponse;
import com.gblog.backend.post.service.PostService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/posts")
public class PostController {

    private final PostService postService;

    public PostController(PostService postService) {
        this.postService = postService;
    }

    @GetMapping
    public List<PostListResponse> getPosts() {
        return postService.getPosts();
    }

    @GetMapping("/{slug}")
    public PostDetailResponse getPost(@PathVariable String slug) {
        return postService.getPost(slug);
    }
}

