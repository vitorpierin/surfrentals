import { Request, Response } from 'express';
import { Rental } from '../models/Rental';
import { Surfboard } from '../models/Surfboard';

export const home = async (req: Request, res: Response) => {
    let available: string = req.query.available as string;
    let list = await Surfboard.findAll({
        order: [
            ['available', 'ASC']
         ]
    });

    
    res.render('pages/home', {
        banner:{
            title:"Surfboards Available:"
        },
        list, 
        available
    });
}

export const all = async (req: Request, res: Response) => {
    try {
        /*let paid: string = req.query.paid as string;*/
        const rentals = await Rental.findAll({
            raw:true
        });
        console.log(rentals);
        res.json({rentals});
        /*res.render('pages/dashboard',{ 
            rentals,
            paid
    })*/
    } catch (error) {
        console.log(error);
    }
   
   //res.json({rentals});
}
export const one = async (req: Request, res: Response) => {
    let id: string = req.params.id;
   
    let rent = await Rental.findByPk(id);

    if(rent){
        res.json({rent});
    }else{
        res.json({error: 'Dados não encontrados'})
       }
 }
export const add = async (req: Request, res: Response) => {
    console.log(req.body);
    try{
        let name: string = req.body.name as string;
        console.log(name);
        
        
        let newRental = await Rental.create({
            name: req.body.name,
            address: req.body.address,
            finalizado: req.body.finalizado,
            equipment: req.body.equipment,
            date_start: req.body.date_start,
            date_end: req.body.date_end,
            total_price: req.body.total_price,
            paid: req.body.paid,
            info: req.body.info,
            document: req.body.document
            

    });
    let id: string = req.body.equipment as string;
    let surfboard = await Surfboard.findByPk(id);
    console.log(id);
    if(surfboard){
        surfboard.available = false;
        await surfboard.save();
        
     }    
    res.status(201).json({item: newRental});
   }catch(error){
    res.json({error});
   }
   //res.redirect('/');
}
export const update = async (req: Request, res: Response) => {
   let id: string = req.params.id;
   
   let rent = await Rental.findByPk(id);

   if(rent){
        if(req.body.name){
            rent.name = req.body.name;
        }
        if(req.body.address){
            rent.address = req.body.address;
        }
        if(req.body.date_start){
            rent.date_start = req.body.date_start;
        }
        if(req.body.date_end){
            rent.date_end = req.body.date_end;
        }
        if(req.body.total_price){
            rent.total_price = req.body.total_price;
        }
        if(req.body.document){
            rent.document = req.body.document;
        }
        if(req.body.finalizado){
           switch(req.body.finalizado.toLowerCase()){
                case 'true':
                case '1':
                    rent.finalizado = true;
                    break;
                case 'false':
                case '0':
                    rent.finalizado = false;
                    break;
           }
        }
        if(req.body.paid){
            switch(req.body.paid.toLowerCase()){
                case 'true':
                case '1':
                    rent.paid = true;
                    break;
                case 'false':
                case '0':
                    rent.paid = false;
                    break;
           }
        }

        await rent.save();
        res.redirect("/");
   }else{
       res.json({error: 'Item não encontrado!'});
   }
}
export const remove = async (req: Request, res: Response) => {
    let id: string = req.params.id;
   
    let rent = await Rental.findByPk(id);

    if(rent){
        await rent.destroy();
    }
    res.json({});
}

export const newrent = async (req: Request, res: Response) => {
    let id: string = req.params.id as string;
    
    let surfboards = await Surfboard.findByPk(id);

    res.render('pages/newrent', {
        banner:{
            title:"New Rent"
        },
        surfboards
       
    });
}
export const updatepage = async (req: Request, res: Response) => {
    let id: string = req.params.id as string;
    let rent = await Rental.findByPk(id);
    
    let surfid = rent?.equipment;
    let surfboard = await Surfboard.findByPk(surfid);   

    res.render('pages/update',{ 
        rent,
        surfboard
})    

}

export const finishrent = async (req: Request, res: Response) => {
    let id: string = req.params.id as string;
    let rent = await Rental.findByPk(id);
    
    if(rent){  
        rent.finalizado = true;
        await rent.save();
        res.redirect('/rentals');
    }

}