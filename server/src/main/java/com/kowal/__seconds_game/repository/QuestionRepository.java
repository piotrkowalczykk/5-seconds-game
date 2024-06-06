package com.kowal.__seconds_game.repository;

import com.kowal.__seconds_game.model.Question;
import org.springframework.data.jpa.repository.JpaRepository;

public interface QuestionRepository extends JpaRepository<Question, Long> {
}
