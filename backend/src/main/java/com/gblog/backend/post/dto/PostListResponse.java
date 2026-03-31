package com.gblog.backend.post.dto;

import java.time.LocalDateTime;

public class PostListResponse {

    private final Long id;
    private final String slug;
    private final String title;
    private final String summary;
    private final String authorName;
    private final LocalDateTime createdAt;

    public PostListResponse(Long id, String slug, String title, String summary, String authorName, LocalDateTime createdAt) {
        this.id = id;
        this.slug = slug;
        this.title = title;
        this.summary = summary;
        this.authorName = authorName;
        this.createdAt = createdAt;
    }

    public Long getId() {
        return id;
    }

    public String getSlug() {
        return slug;
    }

    public String getTitle() {
        return title;
    }

    public String getSummary() {
        return summary;
    }

    public String getAuthorName() {
        return authorName;
    }

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }
}

