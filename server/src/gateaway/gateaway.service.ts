import { Injectable, OnModuleInit } from '@nestjs/common';
import { ConnectedSocket, MessageBody, SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import {Server,Socket } from 'socket.io'

@WebSocketGateway({
        cors: ["localhost:5173","localhost:5000"]
})
export class GateawayService implements OnModuleInit{
    onModuleInit() {
        this.server.on('connection',(socket)=>{
            console.log(socket.id)
            console.log("Connected")
        })
    }
    
    @WebSocketServer()
    server: Server

    @SubscribeMessage('newMessage')
    onNewMessage(@MessageBody() body:any, @ConnectedSocket() client: Socket){
        console.log(body)
        this.server.emit('onMessage',{
            senderId: client.id,
            content: body
        })
    }
}