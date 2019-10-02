export interface QuestionModel {
    questionId: string,
    title: string, 
    description: string,
    answers: [
        {
            description: string,
            correctAnswer: boolean,
        }
    ]
}