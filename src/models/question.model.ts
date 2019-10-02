export interface QuestionModel {
    questionId: string,
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