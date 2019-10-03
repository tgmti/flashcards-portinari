export interface QuestionModel {
    subjectId: string,
    title: string, 
    description: string,
    answers: [
        {
            answerId: string,
            description: string,
            correctAnswer: boolean,
        }
    ]
}

export interface QuestionModelId extends QuestionModel { id: string; }
