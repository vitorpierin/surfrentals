import { Request, Response } from 'express';
import { Surfboard } from '../models/Surfboard';

export const surfboards = async (req: Request, res: Response) => {
  try {
    const list = await Surfboard.findAll({
      raw:true,
      order: [
        ['available', 'DESC'],
        ['id', 'ASC']
     ]
    });
    res.json({list});
  } catch (error) {
      console.log(error);
  }
 
}

export const surfboard = async (req: Request, res: Response) => {
  try {
    let id: string = req.params.id as string;
    let surfboard = await Surfboard.findByPk(id);
    console.log(surfboard)
    if(surfboard){
      console.log(surfboard);
      res.json({surfboard});
    } 
  }catch (error) {
      console.log(error);
  }

}
/*export const update = async (req: Request, res: Response) =>{
  let id: string = req.params.id as string;
   
  let surfboard = await Surfboard.findByPk(id);
  
  if(surfboard){
     surfboard.available = false;
     await surfboard.save();
  }else{
    res.json({error: 'Item não encontrado!'});
  }
  res.redirect('/');
}*/