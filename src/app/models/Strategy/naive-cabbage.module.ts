import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IStrategy } from './istrategy';
import { Graph } from 'src/app/models/Graph/graph';


export class NaiveCabbage2 implements IStrategy {

  actual_place: any;

  public placement(graph: Graph, goat_position_index: number, cabbage_positions_index: number[]) {
    let edges = graph.edges(this.actual_place);
    edges.push(this.actual_place)
    edges = edges.filter(e => !(goat_position_index === e))
    return edges;
  }

  public action(graph: Graph, goat_position_index: number, cabbage_positions_index: number[], collectSpeed: number) {
    let closest = graph.edges(goat_position_index);
    let s = collectSpeed;
    let erase = [];
    for ( const p of closest){
      if (s === 0){
        return erase;
      }
      erase.push(p)
      s -= 1
    }
    for (const x of cabbage_positions_index){
      if (s === 0){
        return erase;
      }
      erase.push(x)
      s -= 1
    }
    return erase;
  }
}

