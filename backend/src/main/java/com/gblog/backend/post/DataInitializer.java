package com.gblog.backend.post;

import com.gblog.backend.post.domain.Post;
import com.gblog.backend.post.repository.PostRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.time.LocalDateTime;

@Configuration
public class DataInitializer {


        // 테이블에 게시글이 없을 때 기본적으로 초기화하는 코드
    @Bean
    public CommandLineRunner seedPosts(PostRepository postRepository) {
        return args -> {
            if (postRepository.count() > 0) {
                return;
            }

            postRepository.save(new Post(
                    "why-i-built-this-blog",
                    "왜 이 블로그를 만들었는가",
                    "개인 소개와 학습 기록을 한 곳에 정리하기 위해 현재 구조를 만든 이유를 설명합니다.",
                    String.join("\n\n",
                            "이 블로그는 포트폴리오를 과장해서 보여주기보다, 내가 어떤 문제를 풀어왔고 무엇을 중요하게 생각하는지 자연스럽게 드러내기 위한 공간이다.",
                            "초기 단계에서는 페이지 수를 최소화하고, 게시글 조회 흐름이 프론트와 백엔드 사이에서 단순하게 이어지도록 구성했다.",
                            "나중에는 글 작성 방식과 운영 환경을 확장하겠지만, 지금은 읽기 쉬운 구조와 안정적인 기본기 구현에 집중한다."
                    ),
                    "GB",
                    LocalDateTime.of(2026, 3, 18, 10, 0)
            ));

            postRepository.save(new Post(
                    "backend-first-decisions",
                    "초기 백엔드 구조에서 먼저 정한 것들",
                    "도메인 과분리 없이 post 기준으로 엔티티, 서비스, 컨트롤러를 둔 이유를 정리합니다.",
                    String.join("\n\n",
                            "게시글 조회가 현재 유일한 핵심 기능이기 때문에 post 패키지 아래에 필요한 클래스만 배치했다.",
                            "DTO를 분리한 이유는 엔티티를 그대로 외부에 노출하지 않고, 나중에 응답 형태를 바꿀 여지를 남기기 위해서다.",
                            "서비스 계층도 매우 얇게 유지해서 지금 읽는 사람이 흐름을 따라가기 쉽도록 만들었다."
                    ),
                    "GB",
                    LocalDateTime.of(2026, 3, 24, 20, 30)
            ));

            postRepository.save(new Post(
                    "frontend-page-flow",
                    "프론트엔드 페이지 흐름 설계 메모",
                    "Home, About, Posts, Post Detail 네 페이지가 어떤 역할을 가지는지 정리한 메모입니다.",
                    String.join("\n\n",
                            "Home은 블로그의 첫인상과 최신 글 요약을 함께 보여주는 출발점이다.",
                            "About은 자기소개를 담고, Posts는 글 목록을 빠르게 훑을 수 있도록 카드 리스트로 구성했다.",
                            "상세 페이지는 본문 읽기에 집중하도록 여백과 줄 길이를 넉넉하게 주고, 백엔드의 slug 기반 상세 조회 API와 연결했다."
                    ),
                    "GB",
                    LocalDateTime.of(2026, 3, 29, 8, 45)
            ));
        };
    }
}

