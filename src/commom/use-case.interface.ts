export interface IUseCase<IUseCaseRequest, IUseCaseResponse> {
  execute(dto: IUseCaseRequest): Promise<IUseCaseResponse>;
}
