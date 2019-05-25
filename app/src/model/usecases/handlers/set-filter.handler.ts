import { CommandHandler, Service } from '../../../framework';
import { SetFilterCommand } from '../commands';
import { TodoFilterType, FilterState } from '../../state';

@Service()
export class SetFilterCommandHandler extends CommandHandler<TodoFilterType> {
  constructor(
    private readonly filterState: FilterState
  ) {
    super(SetFilterCommand);
  }

  public handle(filter: TodoFilterType): void {
    this.filterState.setVisibilityFilter(filter);
  }
}
