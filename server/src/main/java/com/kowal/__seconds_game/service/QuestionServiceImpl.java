package com.kowal.__seconds_game.service;

import com.kowal.__seconds_game.DTO.QuestionDto;
import com.kowal.__seconds_game.exception.ResourceNotFoundException;
import com.kowal.__seconds_game.model.Question;
import com.kowal.__seconds_game.repository.QuestionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class QuestionServiceImpl implements QuestionService{

    @Autowired
    private QuestionRepository questionRepository;

    @Override
    public QuestionDto getQuestionById(Long id) {
        Question question = questionRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Not found"));
        return mapToDto(question);
    }

    private QuestionDto mapToDto(Question question){
        QuestionDto questionDto = new QuestionDto();
        questionDto.setId(question.getId());
        questionDto.setDescription(question.getDescription());
        return questionDto;
    }
}
