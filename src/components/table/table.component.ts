import { Component, Input } from '@angular/core';
import { Transaction } from '../../assets/transactions';
import { NgFor } from '@angular/common';
import { transactions } from '../../assets/transactions';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [NgFor],
  templateUrl: './table.component.html',
  styleUrl: './table.component.sass'
})

export class TableComponent {
  @Input() data: Transaction[] = transactions;
  columns = ['Data', 'Descrição', 'Categoria', 'Finalidade', 'Carteira', 'Valor']
}
