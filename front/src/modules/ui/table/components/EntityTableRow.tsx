import styled from '@emotion/styled';
import { useRecoilValue } from 'recoil';

import { ViewFieldContext } from '../states/ViewFieldContext';
import { visibleViewFieldsState } from '../states/viewFieldsState';

import { CheckboxCell } from './CheckboxCell';
import { EntityTableCell } from './EntityTableCell';

const StyledRow = styled.tr<{ selected: boolean }>`
  background: ${(props) =>
    props.selected ? props.theme.background.secondary : 'none'};
`;

export function EntityTableRow({ rowId }: { rowId: string }) {
  const viewFields = useRecoilValue(visibleViewFieldsState);

  return (
    <StyledRow data-testid={`row-id-${rowId}`} selected={false}>
      <td>
        <CheckboxCell />
      </td>
      {viewFields.map((viewField, columnIndex) => {
        return (
          <ViewFieldContext.Provider value={viewField} key={viewField.id}>
            <EntityTableCell cellIndex={columnIndex} />
          </ViewFieldContext.Provider>
        );
      })}
      <td></td>
    </StyledRow>
  );
}
