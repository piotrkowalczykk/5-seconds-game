package com.kowal.__seconds_game.controller;

import com.kowal.__seconds_game.DTO.QuestionDto;
import com.kowal.__seconds_game.service.QuestionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/question")
@CrossOrigin
public class QuestionController {

    @Autowired
    private QuestionService questionService;

    @GetMapping("/{id}")
    ResponseEntity<QuestionDto> getQuestion(@PathVariable("id") Long questionId){
        QuestionDto questionDto = questionService.getQuestionById(questionId);
        return new ResponseEntity<>(questionDto, HttpStatus.OK);
    }

}
