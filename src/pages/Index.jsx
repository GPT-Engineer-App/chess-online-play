import React, { useState } from "react";
import { Container, VStack, HStack, Button, Text, Box, IconButton } from "@chakra-ui/react";
import { FaChessKing, FaChessQueen, FaChessRook, FaChessBishop, FaChessKnight, FaChessPawn } from "react-icons/fa";

const initialBoard = [
  ["r", "n", "b", "q", "k", "b", "n", "r"],
  ["p", "p", "p", "p", "p", "p", "p", "p"],
  ["", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", ""],
  ["P", "P", "P", "P", "P", "P", "P", "P"],
  ["R", "N", "B", "Q", "K", "B", "N", "R"],
];

const pieceIcons = {
  k: FaChessKing,
  q: FaChessQueen,
  r: FaChessRook,
  b: FaChessBishop,
  n: FaChessKnight,
  p: FaChessPawn,
  K: FaChessKing,
  Q: FaChessQueen,
  R: FaChessRook,
  B: FaChessBishop,
  N: FaChessKnight,
  P: FaChessPawn,
};

const ChessBoard = () => {
  const [board, setBoard] = useState(initialBoard);

  const renderPiece = (piece) => {
    if (!piece) return null;
    const PieceIcon = pieceIcons[piece.toLowerCase()];
    return <PieceIcon color={piece === piece.toUpperCase() ? "white" : "black"} />;
  };

  return (
    <VStack spacing={4}>
      {board.map((row, rowIndex) => (
        <HStack key={rowIndex}>
          {row.map((piece, colIndex) => (
            <Box key={colIndex} width="50px" height="50px" display="flex" alignItems="center" justifyContent="center" bg={(rowIndex + colIndex) % 2 === 0 ? "gray.300" : "gray.700"}>
              {renderPiece(piece)}
            </Box>
          ))}
        </HStack>
      ))}
    </VStack>
  );
};

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Text fontSize="2xl">Online Chess</Text>
        <ChessBoard />
        <Button colorScheme="teal" size="lg">
          Start Game
        </Button>
      </VStack>
    </Container>
  );
};

export default Index;
